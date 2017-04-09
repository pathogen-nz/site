---
title: BezierToolbox
blurb: The BezierToolbox class provides a number of static utility methods to help with handling Bezier curves.
section: classdocs
meta:  
  classname: BezierToolbox
  namespace: Freesewing
  repository: core
tags: [ported, class documentation]
layout: Page
---
## Description 

The [`BezierToolbox`](.) class provides a number of static utility methods to 
help with handling Bezier curves.

> As all of the public class methods are static, there is no need to 
> instantiate an object of this class to use them.

## Credits

(part of) this class is a port of work by [Kevin Lindsey](http://www.kevlindev.com/),
licensed under a BSD-3-clause license.

We have reached a gentlemen's agreement to dual-license this port (thanks Kevin!).

This way, we can include it here under a GPL license, yet it remains
available under the original BSD-3-clause license
for those who prefer that option.

You can find the BSD-3-clause licensed version of this code [here](https://github.com/freesewing/bsd).

## Typical use

The [`BezierToolbox`](.) class is internal. Most of its methods are only
ever called from the [`Path`](../path) and [`Part`](../part) classes. 

An exception is the [`BezierToolbox::bezierCircle`](#beziercircle) method
which is commonly called from a [`Pattern`](../patterns/core/pattern)

## Constants

### STEPS

`STEPS` sets the number of steps when walking a path. 
In other words, methods that chop a path into tiny pieces to get something 
done will chop it into `STEPS` pieces.

`STEPS` is an `integer` with a value of `100`.

## Public methods

### bezierPoint

```php
<?php
float bezierPoint( 
    float $delta,
    float $start,
    float $cp1,
    float $cp2,
    float $end
)
```
Returns single-axis coordinate of a point `$delta` into a cubic Bezier curve.

Delta `$delta` is between 0 and 1.

#### Typical use

Used by this [`BezierToolbox`](.) class and a few methods in the 
[`Part`](../part) class.

#### Parameters

- `float` `$delta` : A value between 0 and 1 to indicate how far along the curve the point lies.
- `float` `$start` : Value of the start point.
- `float` `$cp1` : Value of the first control point.
- `float` `$cp2` : Value of the second control point.
- `float` `$end` : Value of the end point.

#### Return value

Returns a `float`.

### bezierCircle

```php
<?php
float bezierCircle( 
    float $radius 
)
```
Returns `$radius * 4 * (sqrt(2) - 1) / 3` which is the radius that mimics a quarter circle
segment in a Bezier Curve.

You can't make a perfect circle with a cubic Bezier curve, but you can come close by
using by using the value returned by this method to offset your control points.

Delta `$t` is a value between 0 and 1 that indicates how far into 
the curve we need to split. It is typically the result of an earlier call
to [`BezierToolbox::bezierDelta`](#bezierdelta)

#### Example

```phpx beziercircle
<?php
$r = \Freesewing\BezierToolbox::bezierCircle(50);

/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 0);
$p->newPoint(2, 50, 0);
$p->newPoint(3, 50+$r, 0);
$p->newPoint(4, 100, 50-$r);
$p->newPoint(5, 100, 50);
$p->newPoint(6, 100,100);

$p->newPath(1,"M 1 L 2 C 3 4 5 L 6");
```

#### Typical use

Only called from patterns to get a radius that mimics a circle.

#### Parameters

This expects a float, which is the radius of the circle you want to mimic.

#### Return value

Returns a float that indicates how far the offset your control points to mimic a circular
bend over 90 degrees.

### bezierLength

```php
<?php
float bezierLength( 
    Freesewing\Point $start, 
    Freesewing\Point $cp1, 
    Freesewing\Point $cp2, 
    Freesewing\Point $end 
)
```

Calculates the length of a cubic Bezier curve.

> Note that calculating the length of a Bezier Curve is tricky.
> This chops the Bezier Curve in `STEPS` straight line segments to
> approximate the lenght of the curve.


#### Example

```phpx bezierlength
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 100);
$p->newPoint(2, 30, 0);
$p->newPoint(3, 100, 100);
$p->newPoint(4, 100, 50);

$p->newPath(1,"M 1 C 2 3 4");   

$p->newTextOnPath(
    1,
    "M 1 C 2 3 4", 
    "Length of this curve: " .$this->unit($p->curveLen(1,2,3,4)), i
    ["dy" => -2,'class' => 'text-center']
);
```

#### Typical use

Only used through [`Part::curveLen`](../part#curvelen) 
which allows you to pass [`Point`](../point) IDs from the [`Part`](../part)'s points array, 
rather than the actual [`Point`](../point) objects.

#### Parameters

This expects four [`Point`](../point) objects that describe the Bezier curve.

#### Return value

Returns a `float` that is (approximately) the length of the Bezier Curve.

### bezierEdge

```php
<?php
\Freesewing\Point bezierEdge( 
    Freesewing\Point $start, 
    Freesewing\Point $cp1, 
    Freesewing\Point $cp2, 
    Freesewing\Point $end 
    string $direction = 'left'
)
```

This finds the point on the edge of a Bezier curve by walking through the
curve and keeping an eye on its outermost points.

The side is either `left`, `right`, `up` or `down`.

#### Example

```phpx bezieredge
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 50, 50);
$p->newPoint(2, 0, 0);
$p->newPoint(3, 230, 120);
$p->newPoint(4, 100, 100);

$p->newPath(1,"M 1 C 2 3 4");   

$p->addPoint('leftEdge', $p->curveEdge(1,2,3,4,'left'));
$p->addPoint('rightEdge', $p->curveEdge(1,2,3,4,'right'));
$p->addPoint('topEdge', $p->curveEdge(1,2,3,4,'top'));
$p->addPoint('bottomEdge', $p->curveEdge(1,2,3,4,'bottom'));

$p->newTextOnPath(1,"M 1 C 2 3 4", "Bezier curve", ["dy" => -2]);
$p->newNote(1,"leftEdge", "Left edge", 9, 15, 0);
$p->newNote(2,"rightEdge", "Right edge", 3, 15, 0);
$p->newNote(3,"topEdge", "Top edge", 12, 15, 0);
$p->newNote(4,"bottomEdge", "Bottom edge", 6, 15, 0);
```

#### Typical use

Only used through [`Part::curveEdge`](../part#curveedge) 
which allows you to pass [`Point`](../point) IDs from the [`Part`](../part)'s points array, 
rather than the actual [`Point`](../point) objects.

#### Parameters

This expects four [`Point`](../point) objects that describe the Bezier curve and an
additional fifth parameter to indicate direction.

Direction is a string and should be one of these:

- `top`
- `bottom`
- `left`
- `right`

Direction is optional, if ommited it defaults to `left`.

#### Return value

It returns a [`Point`](../point) object that sits at the chosen edge of the Bezier curve.

### bezierBoundary

```php
<?php
\Freesewing\Boundary bezierBoundary( 
    Freesewing\Point $start, 
    Freesewing\Point $cp1, 
    Freesewing\Point $cp2, 
    Freesewing\Point $end 
)
```

This calculates the bounding box by walking through a Bezier curve while 
keeping an eye on the coordinates and registering the most topLeft and 
bottomRight point we encounter.

#### Example

```phpx bezierboundary
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 50, 50);
$p->newPoint(2, 0, 0);
$p->newPoint(3, 230, 120);
$p->newPoint(4, 100, 100);

$p->newPath(1,'M 1 C 2 3 4');   
$boundary = $p->paths[1]->findBoundary($p);

$p->addPoint('topLeft', $boundary->getTopLeft());
$p->addPoint('bottomRight', $boundary->getBottomRight());
$p->newPoint('topRight', $p->x('bottomRight'), $p->y('topLeft'));
$p->newPoint('bottomLeft', $p->x('topLeft'), $p->y('bottomRight'));

$p->newPath(2,'M topLeft L topRight L bottomRight L bottomLeft z', ['class' => 'helpline']);   
$p->newTextOnPath(1,'M 1 C 2 3 4', 'Bezier curve', ['dy' => -2]);
$p->newNote(1,'topRight', 'Boundary', 2, 15, 0);
```

#### Typical use

Only used in [`Path::findBoundary`](../path#findboundary).

#### Parameters

This expects four [`Point`](../point) objects that describe the Bezier curve.

#### Return value

It returns a [`Boundary`](../boundary) object that describes the bounding box.


### bezierDelta

```php
<?php
float bezierDelta( 
    Freesewing\Point $from, 
    Freesewing\Point $cp1, 
    Freesewing\Point $cp2, 
    Freesewing\Point $to 
    Freesewing\Point $split 
)
```
Finds the delta (between 0 and 1) of [`Point`](../point) `$split`
on a Bezier curve.

For example, if `$split` is exactly halfway the curve, this will
return 0.5.

#### Example

```phpx bezierdelta
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 100);
$p->newPoint(2, 30, 0);
$p->newPoint(3, 100, 100);
$p->newPoint(4, 100, 50);
$p->addPoint(5, $p->shiftAlong(1,2,3,4, 50));

$p->newPath(1,"M 1 C 2 3 4");

$delta = \Freesewing\BezierToolbox::bezierDelta(
    $p->loadPoint(1),
    $p->loadPoint(2),
    $p->loadPoint(3),
    $p->loadPoint(4),
    $p->loadPoint(5)
);
$p->newNote(1,5, "Delta of this point: $delta", 5, 25, 0, ['dy' => 2]);
```

#### Typical use

Used only in [`Part::splitCurve`](../part#splitcurve). 

#### Parameters

This expects four [`Point`](../point) objects that describe the Bezier curve, followed 
by a fifth [`Point`](../point) object which is the point on the curve for which
to calculate the delta.

#### Return value

Returns a `float` between 0 and 1, indicating the position along the curve
of the [`Point`](../point) `$split`

### bezierSplit

```php
<?php
array bezierSplit( 
    Freesewing\Point $from, 
    Freesewing\Point $cp1, 
    Freesewing\Point $cp2, 
    Freesewing\Point $to 
    float $t 
)
```
Splits a cubic Bezier curve at delta `$t`, and calculates the control
and end points for a cubic Bezier from `$from` to the [`Point`](../point)
at `$t`.

Delta `$t` is a value between 0 and 1 that indicates how far into 
the curve we need to split. It is typically the result of an earlier call
to [`BezierToolbox::bezierDelta`](#bezierdelta)

#### Example

```phpx beziersplit
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 100);
$p->newPoint(2, 30, 0);
$p->newPoint(3, 100, 100);
$p->newPoint(4, 100, 50);
$p->addPoint(5, $p->shiftAlong(1,2,3,4, 50));

$p->newPath(1,"M 1 C 2 3 4");

// This will add points 's1' to 's8' 
// to the part's points array
$p->addSplitCurve(1,2,3,4,5,'s');

$p->newPath(2,"M s5 C s6 s7 s8", ['class' => 'debug']);
```

#### Typical use

Used only in [`Part::splitCurve`](../part#splitcurve). 

#### Parameters

This expects four [`Point`](../point) objects that describe the Bezier curve,
and an additional 5th parameter for the delta `$t`, between 0 and 1.

#### Return value

Returns an array with 4 [`Point`](../point) objects that describe the Bezier
curve from `$start` to the point at delta `$t`. More precisely:

- The original `$from` [`Point`](../point)
- A [`Point`](../point) that is the control point of the splitted curve on the `$from` side
- A [`Point`](../point) that is the control point of the splitted curve on the `$to` side
- The [`Point`](../point) that sits at delta `$t` in the curve and is the end of the splitted curve

### bezierLineIntersections

```php
<?php
array|false bezierLineIntersections( 
    Freesewing\Point $lFrom, 
    Freesewing\Point $lTo 
    Freesewing\Point $cFrom, 
    Freesewing\Point $cC1, 
    Freesewing\Point $cC2, 
    Freesewing\Point $cTo 
)
```

Finds the intersection(s) between a line segment and a cubic Bezier Curve.

#### Example

```phpx bezierlineintersections
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 100);
$p->newPoint(2, 30, 0);
$p->newPoint(3, 100, 100);
$p->newPoint(4, 100, 50);

$p->newPoint(5, 0, 80);
$p->newPoint(6, 110, 55);

$p->newPath(1,"M 1 C 2 3 4 M 5 L 6");

// This will add points 'i1', 'i2' and 'i3' 
// to the part's points array
$p->curveCrossesLine(1,2,3,4,5,6,'i');
```


#### Typical use

Typically used via [`Part::curveCrossesLine`](../part#curvecrossesline) 
which allows you to pass [`Point`](../point) IDs from the [`Part`](../part)'s points array, 
rather than the actual [`Point`](../point) objects.

#### Parameters

This expects two [`Point`](../point) object that are the start and endpoint of 
the line segment, followed by four [`Point`](../point) objects that describe 
the Bezier curve.

#### Return value

Returns either `false` when no intersections are found. Or an array of 
[`Point`](../point) objects with the intersection point(s).

### bezierBezierIntersections

```php
<?php
array|false bezierBezierIntersections( 
    Freesewing\Point $c1From, 
    Freesewing\Point $c1C1 
    Freesewing\Point $c1C2, 
    Freesewing\Point $c1To, 
    Freesewing\Point $c2From, 
    Freesewing\Point $c2C1 
    Freesewing\Point $c2C2, 
    Freesewing\Point $c2To, 
)
```

Finds the intersection(s) between 2 cubic Bezier Curves.

#### Example

```phpx bezierbezierintersections
<?php
/** @var \Freesewing\Part $p */
$p->newPoint(1, 0, 100);
$p->newPoint(2, 0, -200);
$p->newPoint(3, 100, 300);
$p->newPoint(4, 100, 0);
$p->newPath(1,"M 1 C 2 3 4");

$p->newPoint(5, 0, 10);
$p->newPoint(6, 330, 10);
$p->newPoint(7, -230, 90);
$p->newPoint(8, 100, 90);
$p->newPath(2,"M 5 C 6 7 8");

// This will add points 'i1' => 'i9' 
// to the part's points array
$p->curvesCross(1,2,3,4,5,6,7,8,'i');
```

#### Typical use

Typically used via [`Part::curvesCross`](../part#curvescross) 
which allows you to pass [`Point`](../point) IDs from the [`Part`](../part)'s points array, 
rather than the actual [`Point`](../point) objects.

#### Parameters

This expects eight [`Point`](../point) objects. The first 4 describe the first
Bezier curve, and the last four describe the second Bezier curve.

#### Return value

Returns either `false` when no intersections are found. Or an `array` of 
[`Point`](../point) objects with the intersection point(s).
