# If statements
```javascript
if (x) {
  y;
}
else {
  z;
}
```

MIKE'S OPINION

```javascript
if (x) {
  y;
} else {
  z;
}
```

GEORGE'S OPINION:

```javascript
if (x) { y; } else { z; }
```

OLI'S OPINION:

```javascript
if (x)
{
  y;
}
else
{
  z;
}
```

MODERN APPROACH:

```javascript
if (x)
      {
        y;
      }
      else
          {
            z;
          }
```


👌🏻 A G I L E 👌🏻 APPROACH:

```javascript
x ? y; : z;
```

GOTTA REACH MY WORK COUNT APPROACH

```java
private enum Bewl {
  TRU, FOLS
}
Bewl result = Bewl.FOLS;
if(x) { result = Bewl.TRU; }

switch(result){
  case(TRU):
    y;
    break;
  case(FOLS):
    z;
    break;
  default:
    // choose a different degree
    break;
}

```

Fight me Mike.
