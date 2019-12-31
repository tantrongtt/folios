import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { Lightbox } from "react-modal-image";

import Image from '@components/Image';

const Gallery = ({data}) => {
  
  const { edges } = data.allImageGalleryYaml;

  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);


  return (
    <Wrap>
      <ImageGrid>
        {edges.map((item, index) => (
            <ImageItem
              key={index}
              onClick={() => {
                setShowImageIndex(index);
              }}
            >
              <Image
                src={item.node.image.childImageSharp.fluid}
                alt={item.node.title}
                imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </ImageItem>
          ))
        }

      </ImageGrid>

      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          imageBackgroundColor="#D1E8EB"
          large={edges[showImageIndex].node.image.childImageSharp.fluid.src}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </Wrap>
  );
};

export default Gallery;

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  z-index: 1;
  position: relative;

`;
  
const Wrap = styled.div`

  .__react_modal_image__modal_container {
    background-color: ${p => p.theme.colors.backgroundModal};
  }

  & .__react_modal_image__header {
    background-color: transparent;

    .__react_modal_image__icon_menu {
      
      margin-right: 16px;
      margin-top: 8px;

      svg {
        fill: ${p => p.theme.colors.secondary};
      }
    }
  }

`;

const ImageItem = styled.div`

  cursor: zoom-in;

  &:nth-child(5n){
    grid-column-end: span 2;
  }

  & > div {
    height: 100%;
  }
`;
