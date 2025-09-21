import { ButtonPropMetadata } from '@minimalist/ui/props';
import {configs as buttonConfig} from './Button';

export const configs = {
    'button': {
        'config': buttonConfig,
        'metadata': ButtonPropMetadata.props,
        'defaults': {
            'label': 'Click Me'
        }
    }
}