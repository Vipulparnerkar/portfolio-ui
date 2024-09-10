import React, { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { Card, CardContent, Link, useScrollTrigger } from "@mui/material";

const Blogs = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  useEffect(() => {
    async function fetchMediumPosts() {
      const response = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@parnerkarvipul"
      );
      if (response && response.data) {
        console.log(response.data.items);
        setMediumPosts(response.data.items);
      }
    }

    fetchMediumPosts();
  }, []);
  return (
    <div className="blogs">
      <h1>My Blogs</h1>
      {mediumPosts && mediumPosts.length > 0 ? (
        <div className="medium-blog">
          {mediumPosts.map((post) => {
            return (
              <Card className="blog-card" elevation={2}>
                <CardContent className="blog-card-1">
                  <Link href={post.link}  className="card-url">
                    <div>
                      <div>
                        <img
                          src="/blog.jpg"
                          height={300}
                          width={300}
                          style={{ borderRadius: "20px" }}
                        ></img>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "280px",
                          color: "#fba802",
                          marginLeft: "10px",
                          fontFamily: `"Rubik", sans-serif !important;`,
                        }}
                      >
                        <div>{new Date(post.pubDate).toDateString()}</div>
                        <div>Vipul Parnerkar</div>
                      </div>
                      <div>
                        <h2 className="title_post">{post.title}</h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "400px",
                          color: "#fba802",
                          marginLeft: "10px",
                          fontFamily: `"Rubik", sans-serif !important;`,
                          position: "relative",
                          bottom: "0px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            columnGap: "20px",
                            fontSize: "small",
                          }}
                        >
                          {post.categories.map((category, index) => (
                            <div>
                              {index <= 2 ? (
                                <div key={index}>{category}</div>
                              ) : (
                                <></>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <>Visit my medium at https://medium.com/@parnerkarvipul</>
      )}
    </div>
  );
};

export default Blogs;
