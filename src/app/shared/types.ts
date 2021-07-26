import { Access } from "./models/access";
import { ClientNumber } from "./models/client-number";
import { ActivityConsumption, ElectricConsumption } from "./models/consumption";
import { Location } from "./models/location";
import { Post } from "./models/post";

export type EquipmentArea = "social" | "cultura" | "educacao" | "desporto" | "saude";
export type InfrastructureArea = "energia" | "comunicacao";
export type Group = "equipment" | "infra";

export interface Extra {
    name: string;
    value: string;
}


// TODO: what is HORARIO
export interface Horario {
};

export class EquipmentLocation {

    state: string;
    city: string;
    street: string;
    zipCode: string;
}

export type Equipment = {
    _id: string;
    name: string;
    description: string;
    group: Group;
    area: EquipmentArea | InfrastructureArea;

    equipmentDetails: unknown;
    extras: Extra[];

    // TODO: Add these to the query
    horario?: Horario,
    numero_de_equipamentos?: number;
    localizacao?: EquipmentLocation;
} & (
        { area: "social", group: "equipment", equipmentDetails: SocialDetails; } |
        { area: "cultura", group: "equipment", equipmentDetails: CultureDetails; } |
        { area: "educacao", group: "equipment", equipmentDetails: EducationDetails; } |
        { area: "desporto", group: "equipment", equipmentDetails: SportDetails; } |
        { area: "saude", group: "equipment", equipmentDetails: HealthDetails; } |
        { area: "energia", group: "infra", equipmentDetails: EnergyDetails; } |
        { area: "comunicacao", group: "infra", equipmentDetails: CommunicationDetails; }
    );

export type EquipmentOfGroup<G extends Equipment["group"]> = Equipment & { group: G; };
export type EquipmentOfArea<A extends Equipment["area"]> = Equipment & { area: A; };

export type EquipmentPreview = Pick<Equipment, "group" | "area" | "_id" | "description" | "name">
export type EquipmentNonPreviewDetails = Pick<Equipment, "equipmentDetails" | "extras" | "horario" | "numero_de_equipamentos" | "localizacao">

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

export type HealthDetails = {
    num_utentes?: number;
    tipo_saude?: "saude_geral" | "saude_hospitalar";
    healh_details?: unknown;
} & (
        { tipo_saude: "saude_geral", healh_details: GeneralHealthDetails } |
        { tipo_saude: "saude_hospitalar", healh_details: HospitalHealthDetails }
    );

export type HealthDetailsOfType<T extends HealthDetails["healh_details"]> = HealthDetails & { healh_details: T; };

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

export type EnergyDetails = {
    num_operadores: number;
    tipo_energia: "gas" | "luz";
    lojas_por_operador: [string, number][];
    agentes_por_operador: [string, number][];
    energy_details: unknown;
} & (
        { tipo_energia: "gas", energy_details: GasDetails } |
        { tipo_energia: "luz", energy_details: ElectricityDetails }
    );


export type EnergyDetailsOfType<T extends EnergyDetails["energy_details"]> = EnergyDetails & { energy_details: T; };


export interface GasDetails {
    num_consumo_gas: [Location, number][];
    consumo_gas: [Location, number][];
    pontos_acesso: [Location, number][];
};

export interface ElectricityDetails {
    num_consumo_elec_p_atividade: [Location, ActivityConsumption][];
    consumo_elec_p_atividade: [Location, ElectricConsumption][];
};

export type CommunicationDetails = {
    num_operadores: number;
    tipo_comunicacao: "telefone" | "internet" | "correio" | "televisao";
    lojas_por_operador: [string, number][];
    cobertura_por_operador: [Location, { region: [string, number][]; }][];
    communication_details: unknown;
} & (
        { tipo_comunicacao: "telefone", communication_details: TelephoneDetails } |
        { tipo_comunicacao: "internet", communication_details: InternetDetails } |
        { tipo_comunicacao: "correio", communication_details: MailDetails } |
        { tipo_comunicacao: "televisao", communication_details: TVDetails }
    );

export type CommunicationDetailsOfType<T extends CommunicationDetails["communication_details"]> = CommunicationDetails & { communication_details: T; };

export interface TelephoneDetails {
    num_postos: [Location, Post][];
    num_acessos: [Location, Access][];
    num_acessos_p_100: [Location, number][];
    num_postos_publicos: [Location, number][];
    num_clientes: [Location, ClientNumber][];
};

export interface InternetDetails {
    num_clientes_banda_larga: [string, number][];
    num_acessos_banda_larga_100: [string, number][];
    num_acessos_banda_larga: [Location, Access][];
};

export type MailDetails = [Location, { numPosts: [string, number][]; numStations: [string, number][]; }][]

export interface TVDetails {
    num_subscricoes: [Location, number][];
    num_clientes: [string, number][];
};