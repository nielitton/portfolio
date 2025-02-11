import useDownloader from "react-use-downloader";

export function useCurriculumDownloader() {
    const { download, percentage, isInProgress } = useDownloader()

    const filePath = "/files/curriculo.pdf"
    const fileName = "curriculo-nieliton-sousa.pdf"

    const downloader = () => {
        download(filePath, fileName)
    }

    return {
        percentage,
        isInProgress,
        downloader
    }
}