export interface IGuideCard {
    id: string;
    title: string;
    description: string;
    previewURL: string;
    created_at: string;
}

export interface IGuideCardProps extends IGuideCard {}