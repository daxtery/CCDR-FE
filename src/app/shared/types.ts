import { ActivityConsumption, ElectricConsumption } from "./models/consumption";

export type EquipmentArea = "social" | "cultura" | "educacao" | "desporto" | "saude";
export type InfrastructureArea = "energia" | "comunicacao";
export type Group = "equipment" | "infra";

export type EquipmentPreview<G extends Group = Group> =
    {
        _id: string;
        name: string;
        description: string;
    } & GroupAndArea<G>;

export type AreaOfGroup<G extends Group> = G extends "equipment" ? EquipmentArea : InfrastructureArea;

export type GroupAndArea<G extends Group> = {
    group: G;
    area: AreaOfGroup<G>;
}


export interface Extra {
    name: string;
    value: string;
}


// TODO: what is HORARIO
export interface Horario {
};

// TODO: what is Localizacao
export interface Localizacao {
};

export interface EquipmentNonPreviewDetails<T = unknown> {
    equipmentDetails: T;
    extras: object;

    // TODO: Add these to the query
    horario?: Horario,
    numero_de_equipamentos?: number;
    localizacao?: Localizacao;
}


export type Equipment<G extends Group = Group, T = unknown> = EquipmentPreview<G> & EquipmentNonPreviewDetails<T>;

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

export interface EnergyDetails<T = unknown> {
    num_operadores: number;
    tipo_energia: string;
    lojas_por_operador: [string, number][];
    agentes_por_operador: [string, number][];
    energy_details: T;
};

export interface GasDetails {
    num_consumo_gas: [Location, number][];
    consumo_gas: [Location, number][];
    pontos_acesso: [Location, number][];
};

export interface ElectricityDetails {
    num_consumo_elec_p_atividade: [Location, ActivityConsumption][];
    consumo_elec_p_atividade: [Location, ElectricConsumption][];
};

export interface CommunicationDetails { };