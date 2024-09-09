const apiKey = import.meta.env.APP_APIKEY;
const baseUrl = import.meta.env.APP_BASEURL;

// Get Detail Movies
export async function getMediaDetails(type, id) {
    try {
        const url = `${baseUrl}/${type}/${id}?language=en-US&api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching media details:", error);
        return null; // Return null in case of error
    }
}
// Get Upcoming Movies
export async function getUpcoming() {
    try {
        const response = await fetch(
            `${baseUrl}/movie/upcoming?language=en-US&page=1&region=ID&api_key=${apiKey}`
        );
        const data = await response.json();

        return data.results || [];
    } catch (error) {
        console.error("Error fetching media details:", error);
        return []; // Return null in case of error
    }
}

// Get Trending Movies
export async function getTrending() {
    try {
        const response = await fetch(
            `${baseUrl}/trending/movie/day?language=en-US&page=1&region=ID&api_key=${apiKey}`
        );
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}

// Get Playing Now
export async function getPlayingNow() {
    try {
        const response = await fetch(`${baseUrl}/movie/now_playing?language=en-US&page=1&region=ID&api_key=${apiKey}`);
        
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}
