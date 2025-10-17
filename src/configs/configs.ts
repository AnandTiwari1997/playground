import { ButtonPropMetadata, BadgePropMetadata, InputPropMetadata, CheckboxPropMetadata, TooltipPropMetadata, SelectPropMetadata, TabsPropMetadata } from '@minimalist/ui/props';
import {configs as buttonConfig} from './Button';
import {configs as badgeConfig} from './Badge';
import {configs as inputConfig} from './Input';
import {configs as checkboxConfig} from './Checkbox';
import {configs as tooltipConfig} from './Tooltip';
import {configs as selectConfig} from './Select';
import {configs as tabsConfig} from './Tabs';


export const configs = {
    'button': {
        'config': buttonConfig,
        'metadata': ButtonPropMetadata.props,
        'defaults': {
            'label': 'Click Me'
        }
    },
    'badge': {
        'config': badgeConfig,
        'metadata': BadgePropMetadata.props,
        'defaults': {
            'badgeContent': '0',
        }
    },
    'input': {
        'config': inputConfig,
        'metadata': InputPropMetadata.props,
        'defaults': {
            'placeholder': 'Enter Text',
            'variant': 'primary',
            'size': 'sm',
            'label': 'Email',
            'onChange': (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
        }
    },
    'checkbox': {
        'config': checkboxConfig,
        'metadata': CheckboxPropMetadata.props,
        'defaults': {
            'label': 'Check me',
            'onChange': (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked)
        }
    },
    'tooltip': {
        'config': tooltipConfig,
        'metadata': TooltipPropMetadata.props,
        'defaults': {}
    },
    'select': {
        'config': selectConfig,
        'metadata': SelectPropMetadata.props,
        'defaults': { }
    },
    'tabs': {
        'config': tabsConfig,
        'metadata': TabsPropMetadata.props,
        'defaults': { 
            tabs: [
                { label: 'One', value: 'one' },
                { label: 'Two', value: 'two' }
            ]
         }
    }
}