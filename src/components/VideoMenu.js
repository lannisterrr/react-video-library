function VideoMenu({ children }) {
  return (
    <div className="listing-video__menu-container">
      <span
        onClick={() => console.log('added to watch later')}
        className="f-6 w-100 menu-item pointer"
      >
        <i class="fa-regular fa-clock f-8 p-h-2"></i>
        Add to watch Later
      </span>

      <span className="f-6 w-100 menu-item pointer">
        <i class="fa-regular fa-folder f-8 p-h-2 "></i>
        Add to Playlist
      </span>
      {children}
    </div>
  );
}

export { VideoMenu };
