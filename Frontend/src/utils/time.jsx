const convertTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const formatDuration = (songs) => {
    let totalSeconds = 0;

    songs.forEach((song) => {
        const [minutes, seconds] = song.duration.split(":").map(Number);
        totalSeconds += minutes * 60 + seconds;
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (hours > 0) {
        return `${hours} hr ${minutes} min`;
    }

    return `${minutes} min`;
};


export  {convertTime, formatDuration}