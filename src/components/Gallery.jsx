
const Gallery = () => {
    return (
        <section className="picture-gallery">
            <h1>Picture Gallery</h1>
            <div className="picture-gallery-container">
                <div className="pictures-scroll">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16].map((id) => (
                        <div className="image-container" key={id}>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/imgs/photo${id}.webp`}
                                alt={`Photo ${id}`}
                                className="picture"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;