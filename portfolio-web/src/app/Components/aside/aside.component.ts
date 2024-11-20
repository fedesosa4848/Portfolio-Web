import { GeolocationService } from './../../Services/geolocation.service'; 
import { Component, OnInit } from '@angular/core'; 
import { WeatherService } from '../../Services/weather.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  weather: { location: string; temperature: number; description: string } | null = null;
  errorMessage: string | null = null;
  gifName: string = '';  // Variable para el nombre del gif

  // Coordenadas predeterminadas: Buenos Aires
  defaultCoords = { latitude: -34.6037, longitude: -58.3816 };
  buenosAires = { latitude: -34.6037, longitude: -58.3816 };
  madrid = { latitude: 40.4168, longitude: -3.7038 };
  paris = { latitude: 48.8566, longitude: 2.3522 };
  london = { latitude: 51.5074, longitude: -0.1278 };
  newYork = { latitude: 40.7128, longitude: -74.0060 };
  tokyo = { latitude: 35.6762, longitude: 139.6503 };
  rome = { latitude: 41.9028, longitude: 12.4964 };

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.geolocationService.getCurrentLocation().subscribe({
      next: (coords) => {
        console.log('Coordenadas obtenidas:', coords); // Muestra las coordenadas en la consola
        this.fetchWeather(coords.latitude, coords.longitude);
      },
      error: () => {
        console.error('No se pudo obtener la ubicación, usando Buenos Aires por defecto.');
        this.errorMessage = 'Usando ubicación predeterminada: Buenos Aires.';
        this.fetchWeather(this.newYork.latitude, this.newYork.longitude);
      }
    });
  }

  fetchWeather(lat: number, lon: number): void {
    this.weatherService.getLocationKey(lat, lon).subscribe({
      next: (response) => {
        const locationKey = response.Key;
        const locationName = `${response.LocalizedName}, ${response.AdministrativeArea.LocalizedName}`;

        this.weatherService.getCurrentWeather(locationKey).subscribe({
          next: (weatherResponse) => {
            const weatherData = weatherResponse[0];
            this.weather = {
              location: locationName,
              temperature: weatherData.Temperature.Metric.Value,
              description: weatherData.WeatherText
            };

            // Se establece el nombre del gif según la descripción del clima
            this.setWeatherGif(weatherData.WeatherText);
          },
          error: () => (this.errorMessage = 'Error obteniendo el clima actual.')
        });
      },
      error: () => (this.errorMessage = 'Error obteniendo la ubicación del clima.')
    });
  }

  // Función que asigna el nombre del gif según la condición
  setWeatherGif(description: string): void {
    switch (description.toLowerCase()) {
      case 'soleado':
        this.gifName = 'Soleado.gif';
        break;
      case 'ventoso':
        this.gifName = 'ventoso.gif';
        break;
      case 'nublado':
        this.gifName = 'cloudy.gif';
        break;
      case 'parcialmente nublado':
        this.gifName = 'parcialmente-nublado.gif';
        break;
      case 'tormenta eléctrica':
        this.gifName = 'electrica.gif';
        break;
      case 'niebla densa':
        this.gifName = 'niebla.gif';
        break;
      case 'lluvia ligera':
      case 'chubascos':
      case 'lluvias y tormentas dispersas':
        this.gifName = 'lluvioso.gif';
        break;
      default:
        this.gifName = ''; // No hay gif para la descripción
    }
  }
}
