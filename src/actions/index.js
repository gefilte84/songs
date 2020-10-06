// Actioncreator

export const selectSong = song => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
// named exports må legges i braces {}