import data from "../other/imagesURL"

function ResponsiveSize() {

    const chooseImage = (page, windowWidth) => {

        switch (true) {
            case windowWidth < 420:
                return data[page]["_phoneSize"];
            case windowWidth >= 420 && windowWidth < 850:
                return data[page]["_verticalTabSize"];
            case windowWidth >= 850 && windowWidth < 1180:
                return data[page]["_horizontalTabSize"];
            default:
                return data[page]["_desktopSize"];
        }
    };

    const chooseSizeTitle = (windowWidth) => {

        switch (true) {
            case windowWidth < 420:
                return "telSize";
            case windowWidth >= 420 && windowWidth < 850:
                return "verticalTabSize";
            case windowWidth >= 850 && windowWidth < 1180:
                return "horizontalTabSize";
            default:
                return "desktopSize";
        }
    };

    const videoResponsive = (windowWidth) => {
        switch (true) {
            case windowWidth < 420:
                return "VideoPhoneSize";
            default:
                return "Video";
        }
    }

    return { chooseImage, chooseSizeTitle, videoResponsive };
}
export default ResponsiveSize;
