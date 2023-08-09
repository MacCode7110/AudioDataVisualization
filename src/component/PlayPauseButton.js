function PlayPauseButton()
{
    return (
        <div className = "container">
            <div className = "buttons is-centered">
                <button className = "button is-large is-dark is-hovered is-centered" data-playing="false" role="switch" aria-checked="false"> 
                    <span>Play/Pause</span>
                </button>
            </div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </div> 
    );
}

export default PlayPauseButton;