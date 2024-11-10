{
    type SettingsType = {
        theme: string;
        fontSize: string;
        layout: string
    }

    type OptionalSettings = {
        theme?:string;
        fontSize?: string;
        layout?: string;
    }

    const settings: OptionalSettings = {
        theme: 'dark'
    }

    console.log(settings)
}