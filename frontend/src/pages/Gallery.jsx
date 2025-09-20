import FunTrainingGallery from "../Components/Gallery/FunTrainingGallery";
import IndependenceDayGallery from "../Components/Gallery/IndependenceDayGallery";
import YogaDayCelebration from "../Components/Gallery/YogaDayCelebration";
import Session from "../Components/Gallery/trainingsession";
import NewCabsGallery from "../Components/Gallery/NewCabsGallery";

function Gallery() {
    return (
        <>
        <FunTrainingGallery/>
        <IndependenceDayGallery/>
        <YogaDayCelebration/>
        <Session/>
        <NewCabsGallery/>
        </>
    );
}

export default Gallery;