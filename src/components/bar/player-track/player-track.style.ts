import styled from 'styled-components';

export const TrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`;

export const TrackImageWrapper = styled.div<{ isDarkTheme: boolean }>`
    --bg-color: ${props => props.isDarkTheme ? '#313131' : '#F6F4F4'};

    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
    background-color: var(--bg-color);
`;

export const TrackPlaySVGWrapper = styled.div<{ isDarkTheme: boolean }>`
    --color: ${(props) => (props.isDarkTheme ? '#4E4E4E' : '#B1B1B1')};

    width: 18px;
    height: 17px;
    fill: transparent;
    color: var(--color);
`;

export const TrackPlayAuthor = styled.div`
    position: relative;
    grid-area: author;
    min-width: 49px;
    overflow: hidden;
`;

export const TrackPlayAuthorLink = styled.a<{ isDarkTheme: boolean }>`
    color: ${(props) =>
    props.isDarkTheme ? '#FFFFFF' : '#000000'};

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    text-decoration: underline;
`;

export const TrackPlayAlbum = styled.div`
    position: relative;
    grid-area: album;
    min-width: 49px;
    overflow: hidden;
`;

export const TrackPlayAlbumLink = styled.a<{ isDarkTheme: boolean }>`
    color: ${(props) =>
    props.isDarkTheme ? '#FFFFFF' : '#000000'};

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
`;

export const TrackPlayLikeDisWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;

export const TrackPlayLikeButton = styled.div`
    padding: 5px;
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
`;

export const TrackPlayLikeDisButtonSVGWrapper = styled.div<{
    isDarkTheme: boolean;
}>`
    --color: ${(props) => (props.isDarkTheme ? '#696969' : '#B1B1B1')};
    --color-hover: ${(props) => (props.isDarkTheme ? '#ACACAC' : '#707070')};
    --color-active: ${(props) => (props.isDarkTheme ? '#FFFFFF' : 'transparent')};
    --color-active-fill: ${(props) => (props.isDarkTheme ? '#696969' : '#AD61FF')};

    width: 14px;
    height: 12px;
    cursor: pointer;
    color: var(--color);

    :active {
        fill: var(--color-active-fill);
        color: var(--color);
    }

    :hover {
        color: var(--color-hover);
    }
`;

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
    margin-left: 28.5px;
`;
