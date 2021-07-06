export type Area = "social" | "cultura" | "educacao" | "desporto" | "saude";

export interface EquipmentPreview {
    _id: string;
    area: Area;
    name: string;
    type: string;
}


// TODO: what is HORARIO
export interface Horario {
};

// TODO: what is Localizacao
export interface Localizacao {
};

export interface EquipmentExtraDetails {
    equipmentDetails: object;
    extras: object;

    // TODO: Add these to the query
    horario?: Horario,
    numero_de_equipamentos?: number;
    localizacao?: Localizacao;
}

export interface Equipment extends EquipmentPreview, EquipmentExtraDetails {
}

export interface EquipmentAndScore {
    equipment: EquipmentPreview;
    score: number;
};

export interface SocialDetails {
    fins_lucrativos?: boolean;
    capacidade?: number
    num_utentes?: number
    organizacao?: string
};

export interface CultureDetails {
    acesso_gratuito?: boolean;
    num_visitantes_medio?: number;
    mobilidade_reduzida?: boolean;
    tutela?: string;
};


export interface SportDetails {
    iluminado?: boolean;
    tipo_piso?: string;
    mobilidade_reduzida_pratica?: boolean;
    mobilidade_reduzida_assistencia?: boolean;
    capacidade?: number;
    instalacoes_apoio?: string[];
};

export interface HealthDetails<T extends HospitalHealthDetails | GeneralHealthDetails = unknown> {
    num_utentes?: number;
    tipo_saude?: "saude_geral" | "saude_hospitalar";
    healh_details?: T;
};

export interface HospitalHealthDetails {
    num_equipamentos_por_especialidade?: [string, number][];
    tipo_unidades?: string[];
    agrupamento_saude?: string;
    centro_hospitalar?: string;
    valencias?: string[];
    especialidades?: string[];
};

export interface GeneralHealthDetails {
    capacidade?: number;
    num_centros_saude?: number;
};

export interface SchoolDetails {
    grau_ensino: string;
    capacidade: number;
    num_alunos: number;
};

export interface EducationDetails {
    escolas?: SchoolDetails[];
};