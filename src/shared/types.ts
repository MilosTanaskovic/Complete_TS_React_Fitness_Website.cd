export enum SelectedPage {
    HOME = "home",
    BENEFITS = "benefits",
    OURCLASSES = "ourclasses",
    CONTACTUS = "contactus",
}

export interface BenefitType {
    icon: JSX.Element,
    title: string,
    description: string,
}