export interface IGuideCard {
    id: string;
    previewURL: string;
    name: string;
    nameEn: string;
    description: string;
    descriptionEn: string;
    content: string;
    contentEn: string;
    created_at: string;
}

export interface IGuideCardProps extends IGuideCard {}