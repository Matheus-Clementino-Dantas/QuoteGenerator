import Button from "./Button";
import XIcon from "../assets/XIcon";
function ShareOnXButton({ quote, isloading }) {
  function postOnX() {
    const postContent = `"${quote?.quote}" - ${quote?.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      postContent,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <Button
      disabled={isloading}
      className="transition-transform duration-300 hover:scale-95 "
      aria="post the quote in X"
      onClick={postOnX}
    >
      <XIcon className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 " />
    </Button>
  );
}
export default ShareOnXButton;
