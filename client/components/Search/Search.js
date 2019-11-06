import React, {Component} from 'react'
import { Container } from '../styled/Container';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { Box } from '../styled/Box';
import SearchResultsItem from './SearchResultsItem';
import { getAllData } from '../../api/allData';

export default class Search extends Component {

    constructor() {
        super();

        this.state = {
            imageItems: [],
            isImagesLoaded: false,
        };
    }

    onInputValueChange = (value) => {
        this.setState({
            searchInputValue: value.target.value
        });
    }

    handleSubmit = () => {
        const {searchInputValue} = this.state;

        if (searchInputValue) {
            getAllData({
                query: searchInputValue,
                callback: (response) => {
                    this.setState({
                        imageItems: response.data,
                        isImagesLoaded: true,
                    });
                }
            });
        }
    }

    render() {
        const { imageItems, isImagesLoaded } = this.state;
        const imageItemsData = imageItems.map((item) => {
            if (!!item.url) {
                return (
                    <SearchResultsItem
                        key={item.images.downsized.url}
                        imageUrl={item.images.downsized.url} 
                    />
                );
            } else {
                return (
                    <SearchResultsItem
                        key={item.previewURL}
                        imageUrl={item.previewURL}
                    />
                );
            }
        });

        return (
            <Container align="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <SearchInput onSubmit={this.handleSubmit} onInputValueChange={this.onInputValueChange} />
                    {
                        isImagesLoaded && <SearchResults>{imageItemsData}</SearchResults>
                    }
                </Box>
            </Container>
        );
    }
}
