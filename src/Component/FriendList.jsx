import { useState } from "react";
import { Driver } from "../Auth/neo4j";
export function FriendList(user) {
    console.log("first")
    const [frList, setFrList] = useState();
    (async () => {
        const driver = Driver();
        const session = driver.session();
        const userName = user;
        try {
            const query = `Match (n:User{username:$userName})-[:relates]-(u) return u`;
            const queryResult = await session.writeTransaction(tx =>
                tx.run(query, { userName: userName })
            )
            setFrList(queryResult.records);
        } catch (error) {
            console.error('Something went wrong: ', error)
        }
    })();
    console.log(frList[0])
    return frList;
}
export function NonFriendList(user) {
    const [nFrList, setNFrList] = useState();
    (async () => {
        const driver = Driver();
        const session = driver.session();
        const userName = user;
        try {
            const query = `MATCH (b:User), (r:User) WHERE b.username = "Darshil_001" AND NOT (b)-[:relates]->(r) AND b <> r RETURN r`;
            const queryResult = await session.writeTransaction(tx =>
                tx.run(query, { userName: userName })
            )
            setNFrList(queryResult.records);
        } catch (error) {
            console.error('Something went wrong: ', error)
        }
    })();
    return nFrList;
}