declare namespace SuperComponent {
    interface IMyService {
        getUrl(): string;
    }
}

declare module "super-component" {
    export = SuperComponent;
}