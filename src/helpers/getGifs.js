


    export const getGifs = async( category ) => {

        const gif = 'api.giphy.com/v1/gifs/search?q='
        const url = `https://${ gif }${ encodeURI( category ) }&limit=10&api_key=wlQbIB0e0OM1yhS5f4nJCKD6HMmGs9M8`;
            const resp = await fetch( url );
            const { data } = await resp.json();
    
            const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            } )
    
            return gifs; 
    
        }