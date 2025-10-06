import { db } from "@shared/utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand"

interface CollectionState {
    collectionIDs: {
        id: string,
        last_watering: string,
        last_sun_check: string,
        last_humidity_check: string,
    }[];
    loading: boolean;
    userID: number | undefined;
    loadCollection: () => void;
    plantIDExistInCollection: (id: string) => boolean;
    addToCollection: (id: string) => void;
    removeFromCollection: (id: string) => void;
    markCheckIn: (id: string, type: "last_watering" | "last_sun_check" | "last_humidity_check") => void;
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
        setDoc(collectionRef, { plantIDs: [{ id, last_watering: Date() }, ...collectionIDs] })
        set(state => ({ collectionIDs: [{ id, last_watering: Date(), last_humidity_check: Date(), last_sun_check: Date() }, ...state.collectionIDs] }))
    },
    removeFromCollection: (id: string) => {
        const { userID, collectionIDs } = get();
        const collectionRef = doc(db, "collections", `user_${userID}`)
        setDoc(collectionRef, { plantIDs: [...collectionIDs.filter(el => el.id !== id)] })
        set(state => ({ collectionIDs: [...state.collectionIDs.filter(el => el.id !== id)] }))
    },
    plantIDExistInCollection: (id: string) => {
        const { collectionIDs } = get();
        return collectionIDs.some(el => el.id === id);
    },
    markCheckIn: (id, type) => {
        const { userID, collectionIDs } = get();
        const collectionRef = doc(db, "collections", `user_${userID}`)
        setDoc(collectionRef, {
            plantIDs: [...collectionIDs.map(el => {
                if (el.id === id) el[type] = Date();
                return el
            })]
        })
        set(() => ({ collectionIDs: collectionIDs }))
    }
}))

export { useCollectionStore }