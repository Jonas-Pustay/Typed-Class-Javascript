class byte 
{
    constructor(Value) 
    {
        this.Number = new Uint8Array(1);
        if (typeof(Value) == typeof(5) && Value >= 1 && Value <= 255) 
        {
            this.Number = Value;
        }
        else
        {
            console.error("Not valid byte number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class short 
{
    constructor(Value) 
    {
        this.Number = new Int16Array(1);
        if (typeof(Value) == typeof(5) && Value >= -32768 && Value <= 32767) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid short number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class ushort 
{
    constructor(Value) 
    {
        this.Number = new Uint16Array(1);
        if (typeof(Value) == typeof(5) && Value >= 0 && Value <= 65535) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid unsigned short number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class int 
{
    constructor(Value) 
    {
        this.Number = new Int32Array(1);
        if (typeof(Value) == typeof(5) && Value >= -2147483648 && Value <= 2147483647) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid int number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class uint 
{
    constructor(Value) 
    {
        this.Number = new Uint32Array(1);
        if (typeof(Value) == typeof(5) && Value >= 0 && Value <= 4294967295) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid unsigned int number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class bigint 
{
    constructor(Value) 
    {
        this.Number = new BigInt64Array(1);
        if (typeof(Value) == typeof(5) && Value >= -9223372036854775808n && Value <= 9223372036854775808n) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid bigint number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class float 
{
    constructor(Value) 
    {
        this.Number = new Float32Array(1);
        if (typeof(Value) == typeof(5) && Value >= -340000000000000000000000000000000000000n && Value <= 340000000000000000000000000000000000000n) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid float number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};

class double 
{
    constructor(Value) 
    {
        this.Number = new Float64Array(1);
        if (typeof(Value) == typeof(5) && Value >= -180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n && Value <= 180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n) 
        {
            this.Number[0] = Value;
        }
        else
        {
            console.error("Not valid double number")
        }
    }
    get Get() 
    {
        return this.Number[0];
    }
    set Set(newValue) 
    {
        this.Number[0] = newValue;
    }
};