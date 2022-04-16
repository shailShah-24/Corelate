import { Driver } from "../Auth/neo4j";
export default function EditBio(User,biod){
    (async () => {
        const driver = Driver();
        const session = driver.session();
        const userName = User;
        const Bio = biod;
        try {
            const userExistsQuery = `Match (n) Where n.username = $userName set n.bio = $Bio return n`;
            const userExistsQueryResult = await session.writeTransaction(tx =>
                tx.run(userExistsQuery, { userName,Bio })
            );
            userExistsQueryResult.records.forEach(record => {
                const exists = record.get('n')
            })
        } catch (error) {
            console.error('Something went wrong: ', error)
        }
    })();
	return true;
}