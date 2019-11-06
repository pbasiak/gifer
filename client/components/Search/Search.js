import React, {Component} from 'react'
import { Container } from '../styled/Container';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { Box } from '../styled/Box';
import SearchResultItem from './SearchResultsItem';

export default class Search extends Component {

    constructor() {
        super();

        this.state = {};
    }

    onChange = (field) => {
        console.log(field);

        this.setState({ searchInputValue: field.target.value });
    }

    render() {
        const {searchInputValue} = this.state;
        const items = <SearchResultItem />;

        return (
            <Container align="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <SearchInput onChange={this.onChange} />
                    <SearchResults data={items}/>
                </Box>
            </Container>
        );
    }
}
