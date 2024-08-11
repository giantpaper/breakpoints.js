import {bud} from '@roots/bud'

bud.entry(['./breakpoints.js',])
bud.setPath('@dist', './dist')

bud.minimize()
