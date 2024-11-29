import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={160}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="rounded-lg shadow-md"
    >
        {/* Header */}
        <rect x="0" y="0" rx="4" ry="4" width="80%" height="20" />
        {/* Subheading */}
        <rect x="0" y="30" rx="4" ry="4" width="60%" height="15" />
        {/* Content Lines */}
        <rect x="0" y="60" rx="4" ry="4" width="100%" height="10" />
        <rect x="0" y="80" rx="4" ry="4" width="100%" height="10" />
        <rect x="0" y="100" rx="4" ry="4" width="100%" height="10" />
    </ContentLoader>
);

export default SkeletonLoader;
