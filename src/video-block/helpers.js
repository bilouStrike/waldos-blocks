// Extract timestamps from  Youtube viddeo description
export const extractTime = (str) => {
    const regex = /^(\d+?:\d+?|\d+?:\d+?:\d+?)\s-\s(.*?)$/gsm;
    var match;
    var matches = [];
    while ((match = regex.exec(str)) !== null) {
        if (match.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        var time = match[1];
        var description = match[2];
        matches.push({
          time,
          description
        })
    }
    return matches;
}

export const extractTimeInSeconde = (time) => {
    const timeRange = time?.split(':');
    let start = 0;
    const range_01 = timeRange?.length && parseInt(timeRange[0]);
    const range_02 = timeRange?.length && parseInt(timeRange[1]);
    const range_03 = timeRange?.length && parseInt(timeRange[2]);

    if ( timeRange?.length === 2 ) {
        start = range_01 === 0 ? range_02 : range_01 * 60 + range_02 ;
        return start;
    } 
    if ( timeRange?.length === 3 ) {
        start = range_01 * 3600 + range_02 * 60 + range_03;
        return start;
    }

    return start;
}

export const YouTubeGetID = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}