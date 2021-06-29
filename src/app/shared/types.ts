export type Area = "social" | "cultura" | "educacao" | "desporto" | "saude";

export interface Equipment {
    _id: string;
    area: Area;
    equipmentDetails: object;
    extras: object;
    name: string;
    type: string;
}

export interface EquipmentAndScore {
    equipment: Equipment;
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