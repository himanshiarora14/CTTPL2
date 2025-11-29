import FunTrainingGallery from "../Components/Gallery/FunTrainingGallery";
import IndependenceDayGallery from "../Components/Gallery/IndependenceDayGallery";
import YogaDayCelebration from "../Components/Gallery/YogaDayCelebration";
import Session from "../Components/Gallery/Trainingsession";
import NewCabsGallery from "../Components/Gallery/NewCabsGallery";
import OurFirstBuses from "../Components/Gallery/Ourfirstbuses";
function Gallery() {
    return (
        <>
        <OurFirstBuses/>
        <FunTrainingGallery/>
        <IndependenceDayGallery/>
        <YogaDayCelebration/>
        <Session/>
        <NewCabsGallery/>
        </>
    );
}

export default Gallery;