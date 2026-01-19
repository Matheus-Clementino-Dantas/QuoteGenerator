import { useState } from "react";
import { Bookmark } from "lucide-react";
import Button from "./Button";
function FavoritesButton({ quote, isloading }) {
  const [favorite, setFavorite] = useState(() => {
    if (!quote) return;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((fav) => fav?.id === quote?.id);
  });

  function saveFavorite() {
    if (!quote) return;
    const getFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorite) {
      const filtered = getFavorites.filter((fav) => fav.id !== quote.id);
      localStorage.setItem("favorites", JSON.stringify(filtered));
      return setFavorite(false);
    }
    const newFavorites = [...getFavorites, quote];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setFavorite(true);
  }
  return (
    <Button
      disabled={isloading}
      className="transition-transform duration-300 hover:scale-95 group"
      aria="add to favorites"
      onClick={saveFavorite}
    >
      <Bookmark
        className={`h-4 w-4 md:h-6 md:w-6 transition-colors duration-300 ${favorite ? "stroke-amber-300 fill-amber-300" : ""}`}
      />
    </Button>
  );
}
export default FavoritesButton;
