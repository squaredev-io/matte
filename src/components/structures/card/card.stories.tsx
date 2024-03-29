import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardActions, CardBody } from './card.component';
import { Button } from '../../inputs/button/button.component';
import { Avatar } from '../../display/avatar/avatar.component';
import { TextField } from '../../inputs/textField/textField.component';

export default {
  title: 'Components/Structures/Card',
  component: Card,
  parameters: {
    componentSubtitle:
      'Cards contain content and actions about a single subject.',
  },
} as ComponentMeta<typeof Card>;

export const Cards: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card
        avatar={<Avatar>W</Avatar>}
        image="https://p4.wallpaperbetter.com/wallpaper/118/655/794/nature-bird-little-owl-wallpaper-preview.jpg"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      >
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
        <CardActions>
          <Button>Learn more</Button>
          <Button>Save owls</Button>
        </CardActions>
      </Card>
    </div>
  );
};

/**
 * A card containing basic text and an action button.
 */
export const SimpleCardWithAction: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card subtitle="Biology and Natural History" title="The magnificent owl">
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </div>
  );
};

/**
 * When `href` is set, the card becomes a button.
 */
export const CardAsAButton: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card
        href="#card-as-a-button"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      >
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
      </Card>
    </div>
  );
};

/**
 * A media card is card that communicates content with an image.
 */
export const SimpleMediaCard: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card
        href="#simple-media-card"
        image="https://p4.wallpaperbetter.com/wallpaper/118/655/794/nature-bird-little-owl-wallpaper-preview.jpg"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      />
    </div>
  );
};

/**
 * A typical media card contains an image and some text, if needed, accompanied with buttons.
 */
export const MediaCard: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card
        href="#media-card"
        image="https://p4.wallpaperbetter.com/wallpaper/118/655/794/nature-bird-little-owl-wallpaper-preview.jpg"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      >
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
      </Card>
      <Card
        image="https://p4.wallpaperbetter.com/wallpaper/118/655/794/nature-bird-little-owl-wallpaper-preview.jpg"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      >
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </div>
  );
};

/**
 * If `avatar` is set, a card header is shown. Card headers also include `title` and `subtitle`. Should be used in cases
 * where the card is associated with a user or a brand.
 */
export const CardWithHeader: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card
        avatar={<Avatar>W</Avatar>}
        image="https://p4.wallpaperbetter.com/wallpaper/118/655/794/nature-bird-little-owl-wallpaper-preview.jpg"
        subtitle="Biology and Natural History"
        title="The magnificent owl"
      >
        <CardBody>
          Owls are birds from the order Strigiformes, which includes about 200
          species of mostly solitary and nocturnal birds of prey typified by an
          upright stance, a large, broad head, binocular vision, binaural
          hearing, sharp talons, and feathers adapted for silent flight.
        </CardBody>
        <CardActions>
          <Button>Learn more</Button>
          <Button>Save owls</Button>
        </CardActions>
      </Card>
    </div>
  );
};

/**
 * Put a component inside a card with `CardBody`.
 */
export const WrappedComponent: ComponentStory<typeof Card> = () => {
  return (
    <div className="story__card">
      <Card>
        <CardBody>
          <TextField
            id="required-input"
            placeholder="Required field"
            label="Required field"
            required
          />
        </CardBody>
      </Card>
    </div>
  );
};
