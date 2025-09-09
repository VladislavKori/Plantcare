import { db } from "@shared/utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand"

interface CollectionState {
    collectionIDs: string[];
    loading: boolean;
    userID: number | undefined;
    loadCollection: () => void;
    plantIDExistInCollection: (id: string) => boolean;
    addToCollection: (id: string) => void;
    removeFromCollection: (id: string) => void;
}

const useCollectionStore = create<CollectionState>((set, get) => ({
    collectionIDs: [],
    loading: false,
    userID: window.Telegram.WebApp.initDataUnsafe?.user?.id,
    loadCollection: async () => {
        set({ loading: true });
        const { userID } = get();

        try {
            const docRef = doc(db, "collections", `user_${userID}`);
            const snapshot = await getDoc(docRef);

            if (snapshot.exists()) {
                set({ collectionIDs: [...snapshot.data().plantIDs] });
            } else {
                await setDoc(docRef, []);
                set({ collectionIDs: [] });
            }
        } catch (err) {
            console.error("Ошибка загрузки коллекции:", err);
        } finally {
            set({ loading: false });
        }
    },
    addToCollection: (id: string) => {
        const { userID, collectionIDs } = get();
        const collectionRef = doc(db, "collections", `user_${userID}`)
        setDoc(collectionRef, { plantIDs: [id, ...collectionIDs] })
        set(state => ({ collectionIDs: [id, ...state.collectionIDs] }))
    },
    removeFromCollection: (id: string) => {
        const { userID, collectionIDs } = get();
        const collectionRef = doc(db, "collections", `user_${userID}`)
        setDoc(collectionRef, { plantIDs: [...collectionIDs.filter(el => el !== id)] })
        set(state => ({ collectionIDs: [...state.collectionIDs.filter(el => el !== id)] }))
    },
    plantIDExistInCollection: (id: string) => {
        const { collectionIDs } = get();
        return collectionIDs.includes(id);
    },
}))

export { useCollectionStore }