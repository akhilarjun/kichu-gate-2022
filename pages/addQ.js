import { useState } from "react";
import styles from "../styles/AddQ.module.css";

export default function AddQ() {
    let [showAddTopic, setShowAddTopic] = useState(false);
    let showShowTopic = (selectValue) => {
        if (selectValue === 'addTopic') {
            showAddTopic = setShowAddTopic(true);
        } else {
            showAddTopic = setShowAddTopic(false);
        }
    }
    let addTopicToDB = () => {
        let topicName = document.getElementById('topicName').value;
        fetch('/api/topics', {
            method: 'POST',
            body: JSON.stringify({
                data: topicName
            })
        });
    }
    return (<>
        <div className={styles.container}>
            <div className={styles.label}>
                Add Question
            </div>
            <div className={styles._wrapper}>
                Select a topic
                <div className={styles.topic}>
                    <select
                        onChange={(e) => {
                            showShowTopic(e.target.value);
                        }}>
                        <option value="select">Select a topic</option>
                        <option value="addTopic">+ Add New Topic</option>
                    </select>
                </div>
                {
                    showAddTopic && <div className={styles.add_topic + ' ' + styles.btn}>
                        <input placeholder="Add topic" name="topicName" id="topicName" />
                        <button onClick={() => { addTopicToDB() }}>+ Add</button>
                    </div>
                }
            </div>
            <div className={styles._wrapper + ' ' + styles.question}>
                <textarea placeholder="Add a Question"></textarea>
            </div>
            <div className={styles._wrapper}>
                <div className={styles.option}>
                    <input placeholder="Add option" />
                </div>
                <div className={styles.btn}>
                    <button>Add Option</button>
                </div>
            </div>
            <div className={styles._wrapper}>
                <div className={styles.solution}>
                    <textarea placeholder="Add solution"></textarea>
                </div>
                <div className={styles.btn}>
                    <button>Submit Question</button>
                </div>
            </div>
        </div>
    </>);
}