import Link from "next/link";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden">
        {/* <img
          src={news.urlToImage}
          alt={news.title}
          className="w-full h-48 object-cover"
        /> */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {news.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {news.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>📝 {news.author || "Unknown"}</span>
            <span>📅 {new Date(news.publishedAt).toDateString()}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              📢 {news.source.name}
            </span>
            <Link
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
