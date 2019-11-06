import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SSearchResultsImage } from './styled/SSearchResultsImage';
import { Growler } from '../styled/Growler';

export default function SearchResultItem(props) {

    const { imageUrl } = props;
    const [isCopied, setIsCopied] = React.useState(false);

    const onCopy = () => {
        setIsCopied(true);

        setInterval(() => {
            setIsCopied(false);
        }, 1500);
    }

    return (
        <React.Fragment>
            <CopyToClipboard text={imageUrl} onCopy={onCopy}>
                <SSearchResultsImage src={imageUrl} alt="" />
            </CopyToClipboard>

            {
                isCopied && <Growler>Copied URL!</Growler>
            }
        </React.Fragment>
    );
}
