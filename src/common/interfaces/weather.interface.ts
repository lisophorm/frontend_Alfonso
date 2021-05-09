export interface weatherItem {
  id: number;
  iconUrl: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather:
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }

}
