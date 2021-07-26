import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AreaOfGroup, Group, GroupAndArea } from 'src/app/shared/types';

type IconInfo = {
    url: string
}

type AreaIconsDatabase<G extends Group> = {
    [A in AreaOfGroup<G>]: IconInfo
}

type GroupAndAreaIconDatabase = {
    [G in Group]: AreaIconsDatabase<G>
}

@Injectable({
    providedIn: 'root'
})
export class GroupAreaIconsProvider {

    database: GroupAndAreaIconDatabase = {
        "equipment": {
            "social": { url: "assets/icons/equipment/social.svg" },
            "cultura": { url: "assets/icons/equipment/cultura.svg" },
            "educacao": { url: "assets/icons/equipment/educacao.svg" },
            "desporto": { url: "assets/icons/equipment/desporto.svg" },
            "saude": { url: "assets/icons/equipment/saude.svg" }
        },

        "infra": {
            "energia": { url: "assets/icons/infra/energia.svg" },
            "comunicacao": { url: "assets/icons/infra/comunicacao.svg" }
        }
    };

    constructor(
        matIconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer
    ) {
        Object.keys(this.database).forEach(group => {
            Object.keys(this.database[group]).forEach(area => {
                const icon: IconInfo = this.database[group][area];
                // @ts-ignore
                const name = this.getIconName({ group, area });
                matIconRegistry.addSvgIcon(name, domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
            });
        });


        // TODO: remove this when we have the icons
        matIconRegistry.addSvgIcon("placeholder", domSanitizer.bypassSecurityTrustResourceUrl("https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"));
    }

    getIconName<G extends Group>(groupAndArea: GroupAndArea<G>) {
        return "placeholder";
        // TODO: uncomment this when we have the icons
        // return `${groupAndArea.group}-${groupAndArea.area}` as const;
    }

}
