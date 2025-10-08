const Star = ({ fill = 0, id }) => {
    return (
        <svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id={`clip0-${id}`}>
                    <rect width="12" height="12" transform="translate(0 0.5)" />
                </clipPath>
                <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFC34A" />
                    <stop offset={`${fill * 100}%`} stopColor="#FFC34A" />
                    <stop offset={`${fill * 100}%`} stopColor="#FFC34A" stopOpacity="0" />
                    <stop offset="100%" stopColor="#FFC34A" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g clipPath={`url(#clip0-${id})`}>
                {/* Нижний слой — всегда полупрозрачный */}
                <path
                    d="M12 5.1364L7.63971 4.84974L5.99761 0.724365L4.35551 4.84974L0 5.1364L3.34064 7.97295L2.24442 12.2758L5.99761 9.90345L9.75082 12.2758L8.6546 7.97295L12 5.1364Z"
                    fill="#FFC34A"
                    fillOpacity="0.2"
                />
                {/* Верхний слой — яркая часть */}
                <path
                    d="M12 5.1364L7.63971 4.84974L5.99761 0.724365L4.35551 4.84974L0 5.1364L3.34064 7.97295L2.24442 12.2758L5.99761 9.90345L9.75082 12.2758L8.6546 7.97295L12 5.1364Z"
                    fill={`url(#grad-${id})`}
                />
            </g>
        </svg>
    );
};

const StarRating = ({ rating = 0, max = 5, ratingId = "rating" }) => {
    const stars = [];
    for (let i = 0; i < max; i++) {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        stars.push(<Star key={i} id={`${ratingId}-${i}`} fill={fill} />);
    }
    return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
};

export default StarRating;