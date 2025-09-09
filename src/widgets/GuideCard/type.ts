export interface IGuideCard {
    id: string;
    previewURL: string;
    name: string;
    description: string;
    content: string;
    created_at: string;
}

export interface IGuideCardProps extends IGuideCard {}