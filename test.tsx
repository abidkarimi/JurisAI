<div className="container grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div>
            
            <h6 className="text-lg leading-none text-neutral-900 md:text-xl dark:text-neutral-200 text-center mb-10">
              {item.heading}
            </h6>
              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A] rounded-2xl dark:border-neutral-800  mb-10"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.subHeading}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A] rounded-2xl dark:border-neutral-800  mb-10"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text}
                </span>
              </div>

              <div
                key={item.id}
                className="pl-6 p-2 bg-neutral-50 dark:bg-[#3E3F4A] rounded-2xl dark:border-neutral-800"
              >
                <span className="block text-base sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.text1}
                </span>
              </div>
          </div>
        ))}