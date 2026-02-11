import { AppLayout } from "./layout/AppLayout"
import { SearchCity } from "./components/SearchCity"
import { CurrentWeatherCard } from "./components/cards/CurrentWeatherCard"
import { ForecastCard } from "./components/cards/ForecastCard"
import { useWeather } from "./hooks/useWeather"
import { AlertCircle } from "lucide-react"

function App() {
  const { currentWeather, forecast, loading, error, searchCity } = useWeather();

  return (
    <AppLayout>
      <div className="flex flex-col gap-10">

        <section className="animate-in fade-in slide-in-from-top-4 duration-700">
          <SearchCity onSearch={searchCity} isLoading={loading} />
        </section>

        {loading && !currentWeather && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 animate-pulse">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-gray-400 font-medium">Obteniendo datos meteorológicos...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex flex-col items-center gap-3 animate-in zoom-in-95 duration-300">
            <div className="p-3 bg-red-500/20 rounded-full">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-red-300 font-medium text-center">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-white bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Reintentar
            </button>
          </div>
        )}

        {currentWeather && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            <CurrentWeatherCard weather={currentWeather} />

            {forecast && (
              <section className="space-y-6">
                <div className="flex items-center gap-4 px-2">
                  <h3 className="text-xl font-bold text-white">Próximos 7 días</h3>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-white/10 to-transparent rounded-full" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                  {forecast.daily.map((day) => (
                    <ForecastCard key={day.date} forecast={day} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {!currentWeather && !loading && !error && (
          <div className="flex flex-col items-center justify-center">
            <img src="/weatheria.png" alt="Weatheria" className="w-24 h-24 opacity-40" />
            <p className="text-lg font-medium text-gray-500">Busca una ciudad para ver el pronóstico</p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default App
