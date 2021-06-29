export type Area = "social" | "cultura" | "educacao" | "desporto" | "saude";

export interface EquipmentPreview {
    _id: string;
    area: Area;
    name: string;
    type: string;
}

export interface EquipmentExtraDetails {
    equipmentDetails: object;
    extras: object;
}

export interface Equipment extends EquipmentPreview, EquipmentExtraDetails {
}

export interface EquipmentAndScore {
    equipment: EquipmentPreview;
    score: number;
};

export interface SocialDetails {
    fins_lucrativos: boolean;
};

export interface CultureDetails {
    acesso_gratuito: string;
    num_visitantes_medio: number;
    mobilidade_reduzida: boolean;
    tutela: string;
};

export interface SportDetails {
    iluminado: boolean;
    tipo_piso: string;
    mobilidade_reduzida_pratica: boolean;
    mobilidade_reduzida_assistencia: boolean;
};

export interface HospitalHealthDetails {
    agrupamento_saude: string;
    centro_sospitalar: string;
    valencias: string[];
    especialidades: string[];
};

export interface SchoolDetails {
    grau_ensino: string;
};

export interface EducationDetails {
    escolas: SchoolDetails[];
};