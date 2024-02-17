import Image from 'next/image'
import styles from './singlepost.module.css'
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json(); 
};


const SinglePostPage= async({params})=> {
   
  const {slug}=params;

  const post=await getData(slug);
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
      <Image className={styles.img} src="https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill  />

        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={50} height={50}  />
          <Suspense fallback={<div>Loading...</div>}>
           <PostUser userId={post.userId}/>
           </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>13.02.2024</span>
            </div>
          </div>
          <div className={styles.content}>
           {post.body}
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePostPage