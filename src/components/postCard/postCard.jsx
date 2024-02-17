import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard=({post})=>{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className={styles.img}/>
                </div>
                <span className={styles.date}> 11.02.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link}href={`/blog/${post.id}`}>Read More</Link>
            </div>
        </div>

    )
}
export default PostCard;
