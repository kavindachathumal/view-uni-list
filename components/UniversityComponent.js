import React from "react";
import universityService from "../services/universityService";

class UniversityComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            universities: []
        }
    }

    componentDidMount() {
        universityService.getUniversities().then((response) => {
            this.setState({ universities: response.data})
        });
    }

    render() {
        return(
            <div>
                <h1 className="text-center">University List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Logo</td>
                            <td>Name</td>
                            <td>States</td>
                            <td>URL</td>
                            <td>Num of Buddies</td>
                            <td>Country</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.universities.map(
                                university =>
                                <tr key={university.id}>
                                    <td>{university.id}</td>
                                    <td>{university.name} </td>
                                    <td>{university.domain} </td>
                                    <td>{university.logoUrl} </td>
                                    <td>{university.themeColor} </td>
                                    <td>{university.createdDate} </td>
                                    <td>{university.status} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UniversityComponent