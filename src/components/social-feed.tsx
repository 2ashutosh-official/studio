'use client';

import React, { useState, useEffect } from 'react';
import { getYouTubeVideos, YouTubeVideo } from '@/services/youtube';
import { getTweets, Tweet } from '@/services/x';
import { getLinkedInPosts, LinkedInPost } from '@/services/linkedin';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SocialFeedProps {
    youtubeChannelId: string;
    twitterUsername: string;
    linkedinUserId: string;
    maxResults: number;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ youtubeChannelId, twitterUsername, linkedinUserId, maxResults }) => {
    const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([]);

    useEffect(() => {
        const fetchSocialData = async () => {
            // Fetch YouTube videos
            const youtubeData = await getYouTubeVideos(youtubeChannelId, maxResults);
            setYoutubeVideos(youtubeData);

            // Fetch Tweets
            const tweetsData = await getTweets(twitterUsername, maxResults);
            setTweets(tweetsData);

            // Fetch LinkedIn posts
            const linkedInData = await getLinkedInPosts(linkedinUserId, maxResults);
            setLinkedInPosts(linkedInData);
        };

        fetchSocialData();
    }, [youtubeChannelId, twitterUsername, linkedinUserId, maxResults]);

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Display YouTube Videos */}
            {youtubeVideos.map((video, index) => (
                <Card key={`youtube-${index}`}>
                    <CardHeader>
                        <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{video.description}</p>
                        <a href={video.embedLink} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube
                        </a>
                    </CardContent>
                </Card>
            ))}

            {/* Display Tweets */}
            {tweets.map((tweet, index) => (
                <Card key={`tweet-${index}`}>
                    <CardHeader>
                        <CardTitle>Tweet from @{tweet.username}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{tweet.text}</p>
                        <a href={tweet.profileUrl} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </CardContent>
                </Card>
            ))}

            {/* Display LinkedIn Posts */}
            {linkedInPosts.map((post, index) => (
                <Card key={`linkedin-${index}`}>
                    <CardHeader>
                        <CardTitle>LinkedIn Post by {post.author}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{post.content}</p>
                        <a href={post.authorProfileUrl} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default SocialFeed;
